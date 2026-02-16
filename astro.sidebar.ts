import starlightSidebarTopics from 'starlight-sidebar-topics';

/**
 * Starlight Sidebar Topics plugin configuration
 */
export const sidebarTopics = starlightSidebarTopics([
    {
        label: 'Foundation',
        link: '/foundations/',
        icon: 'open-book',
        items: [{
            label: 'Introduction',
            items: ['foundations/intro'],
        }, {
            label: 'Kotlin Basics',
            items: ['foundations/kotlin'],
        }, 'foundations/hello'],
    },
    {
        label: 'Core',
        link: '/core/',
        icon: 'information',
        items: [{
            label: 'Dependency Injection',
            items: ['core/di/koin', 'core/di/setup'],
        }],
    },
]);