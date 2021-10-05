import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'en-US',
    title: 'Hello VuePress',
    description: 'Just playing around',

    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [
            {
                text: 'Docs',
                link: '/docs/',
            },
            {
                text: 'Demo',
                link: '/demo/',
            },
        ],
        sidebarDepth: 0,
        sidebar: [
            {
                text: 'Introduction',
                link: '/introduction/',
                children: [
                    '/docs/introduction/introduction.md',
                    '/docs/introduction/project-structure.md',
                    '/docs/introduction/launch-behaviour.md',
                    '/docs/introduction/game-states.md',
                ],
            },
            {
                text: 'Features',
                link: '/features/',
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
                link: '/tools/',
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
    },

})
