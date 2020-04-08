# 使用Angular + Nodejs+spanner+AppEngine in GCP的一个微服务实战

博客的网址：https://blog.csdn.net/wucong60/article/details/105342275

这不是一个微服务项目，实际是一个将传统的单体应用重构成一个现化的多服务的云端应用的sample，它源自于一个实际的项目。

## DevOps中的CI部分

参考azure-pipelines.yaml

## 如何在本地运行单个服务

1. 定位到单个服务的文件夹下，运行命令`npm run start`启用服务
2. 在浏览器访问http://localhost:7001/api/servicea/name，即可看到此API返回的内容
3. 如果需要启用authorization对token进行验证,可在ServerA/.env中设置NODE_ENV=production，然后使用REST Client工具进行测试，如果你是使用VSCode编辑器，参考http.http文件，里面有例子。


## 如何在本地运行所有服务

在根目录运行命令`npm run start`启用所有服务，实际并不是将每个服务启动，而是启用一个全局的服务，将单个服务作为子目录运行的，具体可以看一下它的路由配置。

## 如何对Azure AD的token进行验证

参考authorization.js

## 设置cors

参考cors.js


## dispatch.yaml文件的说明

它是AppEngine做路由分发的配置文件。注意default服务必须要有。
参考博客：https://blog.csdn.net/wucong60/article/details/104864400
