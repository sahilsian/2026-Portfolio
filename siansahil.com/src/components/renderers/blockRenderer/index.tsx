import HeroLayout from "@/components/layouts/hero";
import FeatureLayout from "@/components/layouts/feature";
import StatementLayout from "@/components/layouts/statement";
interface BlockRendererProps {
    blocks?: any[]
}

const BlockRenderer = ({blocks}:BlockRendererProps) => {
    return <div>
        {
            blocks?.map(block => {
            switch (block?.variation.variation) {
                case "hero": {
                    return <HeroLayout
                        key={block.id}
                        title={block.title}
                        description={block.description}
                        variation={'flex-row'}
                        image={block.image}
                        profile={block.profile}
                        primary={block.primary}
                        secondary={block.secondary}
                    />
                }
                case "feature": {
                    return <FeatureLayout
                        key={block.id}
                        variation={'flex-row'}
                        image={block.image}
                        title={block.title}
                        description={block.description}
                        primary={block.primary}
                        secondary={block.secondary}
                    />
                }
                case "featureReversed": {
                    return <FeatureLayout
                        key={block.id}
                        variation={'flex-row-reverse'}
                        image={block.image}
                        title={block.title}
                        description={block.description}
                        primary={block.primary}
                        secondary={block.secondary}
                    />
                }
                case "statement": {
                    return <StatementLayout
                        key={block.id}
                        title={block.title}
                        description={block.description}
                        primary={block.primary}
                    />
                }
                default: {
                    return <></>
                }
            }
            })
        }
    </div>
}

export default BlockRenderer