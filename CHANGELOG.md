# [9.1.0](https://github.com/techiediaries/ngx-qrcode/compare/9.0.0...9.1.0) (2020-08-11)


### Code Refactoring

* **packaging:** rename NPM to @techiediaries/ngx-qrcode ([932d26d](https://github.com/techiediaries/ngx-qrcode/commit/932d26da164d44fe056db11f927198aae54860b7)), closes [#47](https://github.com/techiediaries/ngx-qrcode/issues/47)


### Features

* **changelog:** add changelog generation ([0e962ca](https://github.com/techiediaries/ngx-qrcode/commit/0e962ca3567cbd4560926a43c9fe6739abc71525))


### BREAKING CHANGES

* **packaging:** rename this package, @techiediaries/ngx-qrcode must be used instead



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
