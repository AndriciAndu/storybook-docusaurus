---
sidebar_position: 1
title: "Package Upgrades"
---

# Intro


## package.json vs package-lock.json

[imageLink](https://i.stack.imgur.com/pSzRD.png)



### package.json

*   It is used to install different open source and other available packages (that is, pre-packaged
    code modules) in a Node.js project. So I am going to explain the use of it in depth.
*   It is used for more than dependencies - like defining project properties, description,
    author & license information, scripts, etc.
*   It records the minimum version you app needs. If you update the versions of a particular package,
    the change is not going to be reflected here.

[link](https://medium.com/@hossam.hilal0/package-json-vs-package-lock-json-vs-npm-shrinkwrap-json-33fcddc1521a)

*   `^`: install the latest minor version of the package
*   `~`: install the most recent patch version or the most recent minor version
    *   `~1.2.3` will match all `1.2.x` versions, but it will **not** match `1.3.0` or `1.3.x` versions.


*   `~version` “Approximately equivalent to version”, will update you to all future patch versions,
    without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

*   `^version` “Compatible with version”, will update you to all future minor/patch versions, without
    incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.

*   `version` Must match version exactly
*   `>version` Must be greater than version. `>=version`, `<version`, `<=version`
*   `~version` - "Approximately equivalent to version"
*   `^version` - "Compatible with version" - 1.2.x 1.2.0, 1.2.1, etc., but not 1.3.0
*   `*` or `""` (just an empty string) - matches any version
*   `version1 - version2` - same as `>=version1 <=version2`.

>=1.2.7 would match the versions 1.2.7, 1.2.8, 2.5.3, and 1.3.9, but not the versions 1.2.6 or 1.1.0.
>=1.2.7 <1.3.0 would match the versions 1.2.7, 1.2.8, and 1.2.99, but not the versions 1.2.6, 1.3.0, or 1.1.0.
1.2.7 || >=1.2.9 <2.0.0 would match the versions 1.2.7, 1.2.9, and 1.4.6, but not the versions 1.2.8 or 2.0.0.


[devDependencies vs dependencies]
(https://sumantmishra.medium.com/npm-devdependencies-vs-dependencies-in-package-json-d6c790edd725)

*   `devDependencies`: contains the names and versions of the node modules which are required
    only **for development purposes**, like ESLint, JEST, babel etc.
*   `dependencies`: contains the names and versions of the node modules which are also required at **runtime**.
