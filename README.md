mil-sym-js
=========
mil-sym-js is a port of java-based mil-std rendering libraries that have been used in US Army Mission Command software for years.  In November 2013 Mission Command was given the approval to release and maintain these libraries as public open source. 

MIL-STD-2525
-----------
The [MIL-STD-2525] standard defines how to visualize military symbology.  This project provides support for the entire MIL-STD-2525B Change II plus USAS 13-14 and MIL-STD-2525C.  

Project Structure
--------------
mil-sym-js has a namespace structure that resembles the java layout although differs where we needed to implement java functionality that wasn't available in JavaScript:
 
When using Ant to build, the output to the "dist" folder will include a few html files that show basic usage of the renderer.

Version
--------------

1.0

Tech
--------------

mil-sym-js project uses a handful of open source projects to work properly:

* [Ant] - Open source Apache build manager for Java projects
* [jQuery] - A fast, small, and feature-rich JavaScript library 

Limitations
--------------
mil-sym-js is designed & tested to work on IE9 or greater and FireFox 24 or greater.
Currently, singlepoint rendering with this version of the renderer only works on IE and FireFox.
Multipoint rendering will work on most recent browsers.
Older versions of FireFox may work but haven't been tested thoroughly.
IE9 is the absolute minimum for singlepoint rendering.
IE8 may work for just multipoints but hasn't been tested thoroughly.

Singlepoint rendering does not work on WebKit based browsers (Chrome, Safari, etc...) due to the way they handle fonts.


Build
--------------
This project builds with Ant resulting in two JavaScript files.  
One has all of the JS code combined into one file.  
The other is a minified version of the first file. (i.e. sm-bc.js & sm-bc.min.js)

Open a command prompt to the root folder of the repository on your local machine and enter:
```sh
ant clean
ant concat sm-bc minify samples

```

"sm-bc" represents what you rendering capabilities you want.

s: singlepoint (jquery plugin for singlepoint rendering only available in singlepoint only builds)
m: multipoints
sm: both

b: 2525B support
c: 2525C support
bc: both

allFlavors: every variation will be generated

running "ant concat sm-bc minify samples" would result in the following files being placed in the "dist" folder.
fonts (contains fonts needed for singlepoint rendering)
renderer.css (to load the font files)
jquery-[version].min.js
multiPointTester1.html (renders kml for a couple multipoint symbols)
multiPointTester2.html (renders kml for a couple multipoint symbols in a loop to test performance)
singlePointTester.html (renders a couple of singlepoint symbols to the page)
single-point-plugin.html (show sample usage with jQuery)
sm-bc.js (concatenated renderer code)
sm-bc.min.js (concatenated & minified renderer code)

License
----

Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

  [Ant]: http://ant.apache.org/
  [jQuery]: http://jQuery.com
  [MIL-STD-2525]:http://www.everyspec.com/MIL-STD/MIL-STD-2000-2999/MIL-STD-2525_20727/
  
    
