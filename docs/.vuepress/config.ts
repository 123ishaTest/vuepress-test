import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'en-US',
    title: 'Incremental Game Template',
    description: 'A collection of useful scripts to help you develop incremental games',
    base: "/vuepress-test/",
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [
            {
                text: 'Docs',
                link: '/docs/introduction/introduction/',
            },
            {
                text: 'Tutorial',
                link: '/demo/introduction',
            },
        ],
        sidebarDepth: 0,
        sidebar: {
            '/demo': [
                {
                    text: 'Let\'s go bananas',
                    children: [
                        '/demo/introduction.md',
                        '/demo/setting-up.md',
                        '/demo/project-structure.md',
                        '/demo/first-changes.md',
                        '/demo/adding-the-wallet.md',
                        '/demo/gaining-bananas.md',
                    ],
                },
            ],
            '/docs': [
                {
                    text: 'Introduction',
                    children: [
                        '/docs/introduction/introduction.md',
                        '/docs/introduction/project-structure.md',
                        '/docs/introduction/launch-behaviour.md',
                        '/docs/introduction/game-states.md',
                    ],
                },
                {
                    text: 'Features',
                    children: [
                        '/docs/features/wallet.md',
                        '/docs/features/settings.md',
                        '/docs/features/statistics.md',
                        '/docs/features/special-events.md',
                        '/docs/features/achievements.md',
                        '/docs/features/redeemable-codes.md',
                        '/docs/features/key-items.md',
                        '/docs/features/inventory.md',
                        '/docs/features/item-list.md',
                    ],
                },
                {
                    text: 'Tools',
                    children: [
                        '/docs/tools/developer-panel.md',
                        '/docs/tools/requirements.md',
                        '/docs/tools/exp-level.md',
                        '/docs/tools/boosters.md',
                        '/docs/tools/loot-tables.md',
                        '/docs/tools/hotkeys.md',
                        '/docs/tools/probability.md',
                        '/docs/tools/actions.md',
                        '/docs/tools/items.md',
                    ],
                },

            ],
        }
    },

})
