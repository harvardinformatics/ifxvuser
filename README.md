# Harvard FAS Informatics User Interface Library

User interface library built and maintained by the Harvard FAS Informatics group. **This package will only work in applications with Vue CLI, Vuex, and Vuetify installed.**

## Installation

Using NPM:
```
npm i ifxvue
```

In main.js (or wherever Vue is instantiated):

```
import store from './store'
import ifxvue from 'ifxvue'

Vue.use(ifxvue, {store})
```

## Components
All components in this library can be used by name without importing them locally. However, the related Vuex actions and getters must be imported.

#### Dialog `<Dialog/>`
This is a wrapper that uses the v-dialog component from Vuetify to display any globally registered component on top of the current page. To use, pass in any named component as a string. If Dialog component is added to the top level (App.vue), it can be opened by any registered component. If added to a child of App.vue, it must be activated within that component.

First, in main.js (or wherever Vue is instantiated) globally register the component to be displayed:
```
import NamedComponent from 'components/NamedComponent'

Vue.component('NamedComponent', NamedComponent)
```

Second, in App.vue or local component:
```
import {mapActions} from 'vuex'

<script>
    methods: {
        ...mapActions([
            'openDialog',
        ]),
    }
</script>

<template>
    <Dialog :componentToRender="'NamedComponent'"/>
    <v-btn @click.prevent="openDialog()">
</template>
```

#### Message `<Message/>`
This is a simple component that renders a message on top of the current page. If can interpret and display response and error objects, as well as show text of your choioce.

```
import {mapActions} from 'vuex'

<script>
    methods: {
        getData () {
            api.getUserData()
                .then(response => {
                    let message = response.data
                    this.showMessage({response, message})
                })
                .catch(error => {
                    this.showMessage({error})
                })
            },
        testMessage () {
          const message = "This is a test message."
          this.showMessage({message})
        },
        ...mapActions([
            'showMessage',
        ]),
    }
</script>

<template>
    <Message/>
    <v-btn @click.prevent="this.testMessage()>
</template>

```
Optional parameters:
- vertical (stacks message content vertically for mobile)
- top, bottom, left, right (message will be fixed to the top, bottom, left, or right of screen)
- color (applies specified color to the message window - works with standard material color scheme, such as 'success' or 'primary', as well as standard css colors)
- multiline (makes message higher)
- timeout (time in milliseconds for message to be displayed - default is 3000)

```
<Message :top=true :color="success" :timeout=5000/>
```