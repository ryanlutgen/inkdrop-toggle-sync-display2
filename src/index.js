'use babel'

module.exports = {
    //inkdrop.config.get('toggle-sync-display.showSyncStatus')
    config: {
        showSyncStatus: {
            title: 'Show sync status',
            type: 'boolean',
            description: 'Whether or not to show your name sync status at the bottom of the notebook view',
            default: false
        }
    },
    activate: () => {
        // console.log(inkdrop.components);
        // console.log(inkdrop);
        let display = inkdrop.config.get('toggle-sync-display.showSyncStatus') ? "flex" : "none";
        document.documentElement.style.setProperty("--inkdrop-sync-display", display);

        inkdrop.config.observe("toggle-sync-display.showSyncStatus", function (newValue) {
            let display = inkdrop.config.get('toggle-sync-display.showSyncStatus') ? "flex" : "none";
            document.documentElement.style.setProperty("--inkdrop-sync-display", display);
        });
    },
    deactivate: () => {

    }
}
