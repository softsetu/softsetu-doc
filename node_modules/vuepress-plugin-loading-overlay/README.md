# vuepress-plugin-loading-overlay

Vuepress loading overlay plugin based on [vue-loading-overlay](https://github.com/ankurk91/vue-loading-overlay)

## Overview

![vuepress-plugin-loading-overlay](https://user-images.githubusercontent.com/1641039/101765431-a2bba500-3b24-11eb-97d6-af71636890b1.gif)

## Installation

```bash
$ npm install --save-dev vuepress-plugin-loading-overlay
```

or

```bash
$ yarn add -D vuepress-plugin-loading-overlay
```

then add plugin to your vuepress config `config.js`

```js
...
plugins: [
    ['vuepress-plugin-loading-overlay', {
        loader: 'spinner',
        timeout: 500,
    }],
]
```

## Options

| Option  |  Type  | Default | Description                                                     |
| :------ | :----: | :-----: | :-------------------------------------------------------------- |
| timeout | Number |  `250`  | A number of millisecond that the loading indicator is displayed |

You can pass the [options](https://github.com/ankurk91/vue-loading-overlay#available-props) of `vue-loading-overlay` as well.

| Option          |   Type   |  Default  | Description                                                                                |
| :-------------- | :------: | :-------: | :----------------------------------------------------------------------------------------- |
| active          | Boolean  |  `false`  | Show loading by default when `true`, use the `.sync` modifier to make it two-way binding   |
| canCancel       | Boolean  |  `false`  | Allow user to cancel by pressing ESC or clicking outside                                   |
| onCancel        | Function | `()=>{}`  | Do something upon cancel, works in conjunction with `can-cancel`                           |
| isFullPage      | Boolean  |  `true`   | When `false`; limit loader to its container^                                               |
| transition      |  String  |  `fade`   | [Transition](https://vuejs.org/v2/guide/transitions.html) name                             |
| color           |  String  |  `#000`   | Customize the color of loading icon                                                        |
| height          |  Number  |    \*     | Customize the height of loading icon                                                       |
| width           |  Number  |    \*     | Customize the width of loading icon                                                        |
| loader          |  String  | `spinner` | Name of icon shape you want use as loader, `spinner` or `dots` or `bars`                   |
| backgroundColor |  String  |  `#fff`   | Customize the overlay background color                                                     |
| opacity         |  Number  |   `0.5`   | Customize the overlay background opacity                                                   |
| zIndex          |  Number  |  `9999`   | Customize the overlay z-index                                                              |
| enforceFocus    | Boolean  |  `true`   | Force focus on loader                                                                      |
| lockScroll      | Boolean  |  `false`  | Freeze the scrolling during full screen loader                                             |
| blur            |  String  |   `2px`   | Value for the CSS blur backdrop-filter. Set to null or an empty string to disable blurring |

## Testing

```bash
$ yarn add vue-loading-overlay
```

Add this plugin as CommonJS module

```js
plugins: [
    [require('../vuepress-plugin-loading-overlay'), {}],
]
```

## Contributing

1.  Fork it
2.  Create your feature branch (`git checkout -b my-new-feature`)
3.  Commit your changes (`git commit -am 'Add some feature'`)
4.  Push to the branch (`git push origin my-new-feature`)
5.  Create new Pull Request

## License

MIT
