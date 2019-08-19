
import mixpanel from 'mixpanel-browser';
mixpanel.init('0a656753e6651e53814b19a9ad2bc9c5');

let env_check = 'production'

let actions = {
    identify: (id) => {
        if (env_check) mixpanel.identify(id);
    },
    alias: (id) => {
        if (env_check) mixpanel.alias(id);
    },
    track: (name, props) => {
        if (env_check) mixpanel.track(name, props);
    },
    people: {
        set: (props) => {
            if (env_check) mixpanel.people.set(props);
        },
    },
};

export let Mixpanel = actions;