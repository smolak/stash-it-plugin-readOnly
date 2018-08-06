export default function readOnlyPlugin() {
    const handler = () => {
        throw new Error('Only reading is allowed.');
    };

    return {
        hooks: [
            { event: 'preSetItem', handler },
            { event: 'preAddExtra', handler },
            { event: 'preSetExtra', handler },
            { event: 'preRemoveItem', handler }
        ]
    };
}
