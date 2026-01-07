import {createFileRoute} from '@tanstack/react-router'
import {queryCategories, queryProductCollection} from "@/lib/graphQL/gqlClient.ts";
import CollectionRenderer from "@/components/renderers/collectionRenderer";
import {STANDARD_PAGINATION} from "@/lib/graphQL/queries.ts";

export const Route = createFileRoute('/products/')({
    validateSearch: (search: Record<string, unknown>) => {
        return {
            page: search.page ? Number(search.page) : undefined,
            pageSize: search.pageSize ? Number(search.pageSize) : undefined,
            title: search.title ? String(search.title) : undefined,
            category: search.category ? String(search.category) : undefined
        }
    },
    component: RouteComponent,
    loaderDeps: ({ search: { page, pageSize, title, category } }) => ({ page, pageSize, title, category }),
    loader: async ({context,  deps: { page, pageSize, title, category } }) => {

        const pagination = {
            page: page ?? STANDARD_PAGINATION.pagination.page,
            pageSize: pageSize ?? STANDARD_PAGINATION.pagination.pageSize,
        }

        const categoryFilter = (category && category !== "all") ? category : null;

        const filters: any = {
            title: {
                contains: title || ""
            }
        };

        if (categoryFilter) {
            filters.category = {
                name: {
                    eqi: categoryFilter
                }
            };
        }

        const categories = await context.queryClient.ensureQueryData({
            queryFn: queryCategories,
            queryKey: ["categories"]
        })

        const products = await context.queryClient.fetchQuery({
            queryFn: () => queryProductCollection({
                data: {pagination, filters}
            }),
            queryKey: ["products", page, pageSize, title, categoryFilter],
        })

        console.log("Fetched products:", products.products_connection.nodes);
        console.log("Filter used:", filters);

        return {products: products.products_connection, categories: categories.categories}
    }
})

function RouteComponent() {
    const { products, categories } = Route.useLoaderData()
  return <div>
      <CollectionRenderer
          type={"product"}
          pageInfo={products.pageInfo}
          collection={products.nodes}
          categories={categories}
      >
      </CollectionRenderer>
  </div>
}
