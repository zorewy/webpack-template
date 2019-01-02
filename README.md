"# webpack-template"
webpack4.x
NoEmitOnErrorsPlugin 废弃，使用optimization.noEmitOnErrors替代，在生产环境中默认开启该插件。

ModuleConcatenationPlugin 废弃，使用optimization.concatenateModules替代，在生产环境默认开启该插件。

NamedModulesPlugin 废弃，使用optimization.namedModules替代，在生产环境默认开启。

uglifyjs-webpack-plugin升级到了v1.0版本, 默认开启缓存和并行功能。
-----
optimization:{
  splitChunks:{
    chunks:async,//表示显示块的范围，三个可选值：
    //initial(初始块)、async(按需加载块)、all(默认，全部块)

    minSize:0,//表示在分离前的最小模块大小，默认为0，最小为30000

    minChunks:1,//表示分离前被引用次数,默认为1

    maxAsyncRequests:1,//最大按需加载次数，最大异步加载次数，默认1

    maxInitialRequests:1,//最大初始化加载次数，一个入口文件可以并行加载的最大文件数量，默认1

    automaticNameDelimiter: '~',//打包分隔符，若改为'-'则分离后的js默认命名规则为[来源]-[入口key].js

    name: function(){},//打包后的名称，此选项可接受函数，默认true,,由chunk和hash值自动生成，
    //当存在匹配的缓存组时，命名使用缓存组中的name值，若不在则为[来源]~[入口key].js

    cacheGroups:{//设置缓存chunks

        priority: 0,//缓存组优先级
        //当需要优先匹配缓存组的规则时，priority需要设置为正数，当需要优先匹配默认设置时，缓存组需设置为负数，0为两者分割线

        default:{//设置缓存组默认配置，可通过default:false禁用默认缓存组，
        //然后就可以自定义缓存组，将初始化加载时被重复引用的模块进行拆分
            minChunks:2,//引用两次
            priority:-20,//缓存组优先级为-20
            reuseExistingChunk:true,//表示可以使用已经存在的块，即如果满足条件的块已经存在就是用己有的的，不再创建一个新的块
        }，
        [key]:{//自定义缓存组，可以根据需求，自由创建
            chunks:'initial',
            test: /vue/,//正则规则验证，如符合就提取chunk放入当前缓存组，值可以是function、boolean、string、RegExp，默认为空
            enforce: true//优先处理
        }
    }
  }
}


1、getDefaultProps()

设置默认的props，也可以用dufaultProps设置组件的默认属性.

2、getInitialState()

在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props

3、componentWillMount()

组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。

4、 render()

组件渲染， 创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。

5、componentDidMount()

组件渲染之后调用，只调用一次。

更新
6、componentWillReceiveProps(nextProps)

组件初始化时不调用，组件接受新的props时调用。

7、shouldComponentUpdate(nextProps, nextState)

react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候

8、componentWillUpdata(nextProps, nextState)

组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state

9、componentDidUpdate()

组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。

卸载
10、componentWillUnmount()

组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
