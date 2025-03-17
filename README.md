mil-sym-js
=========
mil-sym-js is a JavaScript port of the java-based mil-std rendering libraries that have been used in US Army Mission Command software for years.  In November 2013 Mission Command was given the approval to release and maintain these libraries as public open source. 

[JS Renderer Developer's Guide Wiki](https://github.com/missioncommand/mil-sym-js/wiki/Developer's-Guide)  
[Google Group Discussion Forum](https://groups.google.com/forum/#!forum/mission-command-milstd-renderer)  
[mil-sym-js io page on GitHub](http://missioncommand.github.io/mil-sym-js/)

MIL-STD-2525
-----------
The MIL-STD-2525 standard defines how to visualize military symbology.  This project provides support for the entire MIL-STD-2525B Change II and MIL-STD-2525C specs.  

Project Structure
--------------
mil-sym-js has a namespace structure that resembles the java layout although differs where we needed to implement java functionality that wasn't available in JavaScript:

When using Ant to build, the output to the "dist" folder will include a few html files that show basic usage of the renderer.

Version
--------------

1.1

Features 
--------------
* Supports MilStd 2525bch2 and 2525C  
* Supports Unified Specification for ABCS Symbology (USAS) for Common Operating Environment (COE) v1.1 for 2525Bch2  
* Supports Unified Specification for ABCS Symbology (USAS) for Common Operating Environment (COE) v2 for 2525C.  Have not seen a v3 document yet.  
* Single Point Symbology output as HTML5 Canvas or SVG  
* Multi Point Symbology output as KML, GeoJSON, GeoCanvas, GeoSVG  
* GeoCanvas and GeoSVG are regular HTML5 canvas objects and SVG strings with extra information on how to georeference the image and drape it on the map.   
* [Web Worker](https://www.html5rocks.com/en/tutorials/workers/basics/) Support: Single Point SVGs and all Multi Point formats except for GeoCanvas support use in a web worker.  This allows for symbology generation to happen off of the main thread and keep your GUI responsive under heavy loads.  


Tech
--------------

mil-sym-js project uses a handful of open source projects to work properly:

* [Ant] - Open source Apache build manager for Java projects
* [jQuery] - A fast, small, and feature-rich JavaScript library 

Limitations
--------------

Rendering of Single Point Symbology to an HTML5 canvas requires the loading of external fonts via CSS.  If this is not possible due to group policies or other reasons, it is recommended to use SVG as your Single Point Symbology rendering format.
[Single Point HTML5 Canvas Rendering Web Browser Compatibility Tables](https://github.com/missioncommand/mil-sym-js/blob/master/Browser%20Compatibility.md) 


Build
--------------
This project builds with Ant resulting in two JavaScript files.  
One has all of the JS code combined into one file.  
The other is a minified version of the first file. (i.e. sm-bc.js & sm-bc.min.js)

Open a command prompt to the root folder of the repository on your local machine and enter:
```
ant clean
ant concat sm-bc minify samples

```

"sm-bc" represents what you rendering capabilities you want.  

s: singlepoint canvas support (jquery plugin for singlepoint rendering only available in singlepoint only builds)  
sv: singlepoint svg support  
sav: singlepoint canvas and svg support  
m: multipoints (KML, GeoJSON, GeoSVG) 
sm: singlepoint canvas and multipoints (multipoint GeoCanvas support requires both)  
savm: (singlepoint canvas & svg format and all multipoint formats)

b: 2525B support  
c: 2525C support  
bc: both  

allFlavors: every variation will be generated

running "ant concat sm-bc minify samples" would result in the following files being placed in the "dist" folder:  
- fonts (contains fonts needed for singlepoint rendering)  
- renderer.css (to load the font files)  
- jquery-[version].min.js  
- multiPointTester1.html (renders kml for a couple multipoint symbols)  
- multiPointTester2.html (renders kml for a couple multipoint symbols in a loop to test performance)  
- singlePointTester.html (renders a couple of singlepoint symbols to the page)  
- singlePointTester2.html (Allows you to render any single point symbol and adjust rendering attributes & modifiers)  
- single-point-plugin.html (show sample usage with jQuery)  
- sm-bc.js (concatenated renderer code)  
- sm-bc.min.js (concatenated & minified renderer code)  




The build process will create the dist folder with all necessary files, and the publish process will publish only the dist folder to NPM. The test script verifies that the build process works correctly and produces all the expected files.

License
----

Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

  [Ant]: http://ant.apache.org/
  [jQuery]: http://jQuery.com
  [MIL-STD-2525]:http://www.everyspec.com/MIL-STD/MIL-STD-2000-2999/MIL-STD-2525_20727/
