**MIL SYMBOLOGY JAVASCRIPT RENDERER**


Web Browser Compatibility Chart for Single Point Icon Rendering  
This is only in reference to canvas rendering.  
SVG based singlepoint rendering should be compatible is most situations.  

Revision History  
03/24/2014      Initial Document  
03/25/2014      Android & Linux Compatibility updated  
03/10/2015      removed deprecated link, reworded opening paragraph.

Only IE & Firefox on Windows are tested on a regular basis.  
Positive results for browsers are based on rendering of a test page with symbols that would usually cause problems for browsers with sub-par custom font support.  Browserstack.com or Browsershots.org was used for testing other platforms. The test page use would immediately load and render 3 symbols.  Typically, one of the symbols will render incorrectly if the custom font support of the browser isn't where it needs to be.

| Windows 7 | Status | Testing Method |  
| :------------ | :------------: | :------------: | 
| IE9+ | works | live test |  
| FF 16+ | works | live test |  
| FF 12-15 | works | browserstack.com |  
| FF 3.6-11 | fail | browserstack.com |  
| Chrome 32 | works | live test |  
| Chrome 31 | fail | browserstack.com |  
| Opera 21+ | works | live test |  
| Opera 12.6 | fail | browserstack.com |  
| Safari 5.1 | fail | browserstack.com |  

| Windows XP | Status | Testing Method |  
| :------------ | :------------: | :------------: | 
| FF12+ | works | browserstack.com |  

| OS X Mavericks | Status | Testing Method |  
| :------------ | :------------: | :------------: | 
| opera 11.6+ | works | browserstack.com |  
| Safari 7 | works | browserstack.com |  
| Chrome 14+ | works | browserstack.com |  
| FF 25 | fail | browserstack.com |  

| OS X Snow Leopard | Status | Testing Method |  
| :------------ | :------------: | :------------: | 
| Safari 5.1 | works | browserstack.com | 

| Linux | Status | Testing Method |  
| :------------ | :------------: | :------------: | 
| Debian 6 Firefox 12+ | works | browsershots.org |  
| Debian 6 Opera 12+ | works | browsershots.org |  
| Debian 6 Chrome 6,30,31 | works | browsershots.org |  
| Debian 6 SeaMonkey 2.23 | works | browsershots.org |  
| Ubuntu 12.04 LTS Chrome 33 | works | browsershots.org |  

| Android | Status | Testing Method |  
| :------------ | :------------: | :------------: | 
| Android 4.4 Chrome 33 | works | live test (Google Nexus 5, Nexus 7 ) |  
| Android 4.3 Chrome 33 | works | live test (Samsung Galaxy S3 ) |  
| Android 4.3 Stock Browser | fail | live test (Samsung Galaxy S3 ) |  
| Android 4.2 Chrome 18 | fail | live test (Nexus 7 ) |  

| IOS 7.1 | Status | Testing Method |  
| :------------ | :------------: | :------------: | 
| Safari | works | live (iPhone 4S)| 

| IOS 7 | Status | Testing Method |  
| :------------ | :------------: | :------------: |   
| Safari | fail | browserstack.com |  

| IOS 6 | Status | Testing Method |  
| :------------ | :------------: | :------------: |   
| Safari | fail | browserstack.com |  

| Windows Phone 8.0  GDR 3 | Status | Testing Method |  
| :------------ | :------------: | :------------: |   
| IE | works | live test (Lumia Icon) |  

| Windows Phone 7.* | Status | Testing Method |  
| :------------ | :------------: | :------------: |   
| IE | fails | live test (HTC Arrive) |  

