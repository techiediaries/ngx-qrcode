<a name="9.0.0"></a>
# 9.0.0 (2020-04-28)


### Bug Fixes

* **core:** Remove the alt attribute when undefined.

### Features

* **lib:** support for angular v9
* **core:** Create unit tests with 100% of code coverage
* **core:** Fix lint

### Refactor

* **core:** Create types, constants and enums to type component inputs.

### BREAKING CHANGES

* **lib:** Rename properties to follow angular style guide

Before:
```
[qrc-element-type] 
[qrc-class] 
[qrc-alt] 
[qrc-value] 
[qrc-version]
[qrc-errorCorrectionLevel]
[qrc-margin]
[qrc-scale]
[qrc-width]
[qrc-colorDark]
[qrc-colorLight]
```

After:
```
[elementType]
[cssClass]
[alt]
[value]
[version]
[errorCorrectionLevel]
[margin]
[scale]
[width]
[colorDark]
[colorLight]
```
