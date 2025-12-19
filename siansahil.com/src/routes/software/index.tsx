import {createFileRoute} from '@tanstack/react-router'
import {querySoftware, querySoftwareCollection} from "@/lib/graphQL/gqlClient.ts";
import CollectionRenderer from "@/components/renderers/collectionRenderer";

export const Route = createFileRoute('/software/')({
    component: RouteComponent,
    loader: async ({context}) => {
        const softwareLayout = await context.queryClient.ensureQueryData({
            queryFn: querySoftware,
            queryKey: ["software_layout"]
        })
        const software = await context.queryClient.ensureQueryData({
            queryFn: querySoftwareCollection,
            queryKey: ["software"]
        })
        return {software: software.softwares, softwareLayout: softwareLayout.softwareLayout}
    }
})

function RouteComponent() {
    const { software, softwareLayout } = Route.useLoaderData()
    const blocks:any[] = [
        softwareLayout.collection
    ]

    return <div>
        <CollectionRenderer collection={software} blocks={blocks}></CollectionRenderer>
    </div>
}
