jsfl-toolbox
============

在日常的Flash开发过程中，经常遇到一些琐碎繁重而又不得不做的工作，比如：给舞台上200多个元件依次命名，把设计提供的1000个文字素材转换成影片剪辑等。

这个脚本库试图减轻一些繁重的体力劳动。

使用时，需要把Commands文件夹下的脚本拷贝到Flash IDE的一个配置文件夹，如果不知道这个文件夹的路径，可以在Flash IDE中运行如下JSFL脚本：

`fl.trace(fl.configURI);`


These are simple utilities to do the dirty job, such as sort library items by their types, give each item a name automatically, etc. 

You can download the jsfl scripts, and copy them into the _Commands_ directory. If you don't know where the directory is, you can run this command in Flash IDE in jsfl mode:

`fl.trace(fl.configURI);`
