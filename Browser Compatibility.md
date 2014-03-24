**MIL SYMBOLOGY JAVASCRIPT RENDERER**


Web Browser Compatibility Chart for Single Point Icon Rendering


Revision History  
Initial Document	03/24/2014  

Only IE & FireFox on Windows are getting tested regularly.  
Positives results for browsers are based on light testing but with symbols that would usually cause problems for browsers with sub-par custom font support.  Browserstack.com was used for testing other platforms.  At least one inconsistency was found with browserstack vs a live test.  So take the results with a grain of salt.  Live test values will replace browserstack values when available.

| Windows 7 | Status | Testing Method |  
| :------------ | :------------: | :------------: | 
| IE9+ | works | live test |  
| FF 16+ | works | live test |  
| FF 12-15 | works | browserstack.com |  
| FF 4-11 | mostly works | browserstack.com |  
| FF 3.6-11 | fail | browserstack.com |  
| Chrome 32+ | works | live test |  
| Opera 21+ | works | live test |  
| Opera 12.6+ | fail | browserstack.com |  
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

| Android | Status | Testing Method |  
| :------------ | :------------: | :------------: | 
| Firefox | ? |  |  
| Safari | ? |  |  
| Chrome | ? |  |  

| Android Devices | Status | Testing Method |  
| :------------ | :------------: | :------------: | 
| Motorola Droid 4 | canvas rendering works, no data Urls | browserstack.com |  
| LG Optimus 3D | canvas rendering works, no data Urls | browserstack.com |  

| IOS 7.1 | Status | Testing Method |  
| :------------ | :------------: | :------------: | 
| Safari | works | live (iPhone 4S)| 

| IOS 7 | Status | Testing Method |  
| :------------ | :------------: | :------------: |   
| Safari | fail | browserstack.com |  

| IOS 6 | Status | Testing Method |  
| :------------ | :------------: | :------------: |   
| Safari | fail | browserstack.com |  

| Windows Phone 8 | Status | Testing Method |  
| :------------ | :------------: |  
| IE | works | live |  

| Windows Phone 7/7.5/7.8 | Status | Testing Method |  
| :------------ | :------------: |  
| IE | fails | live |  

