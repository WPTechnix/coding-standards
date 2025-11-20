<h1 align="center">WPTechnix Coding Standards</h1>

<p align="center">
    <strong>PHP 8.0+ coding standards enforcing strict types, immutability, and PSR-12 compliance.</strong>
</p>

<p align="center">
    <a href="https://github.com/wptechnix/coding-standards"><img src="https://img.shields.io/badge/source-wptechnix/coding--standards-blue.svg?style=flat-square" alt="Source Code"></a>
    <a href="https://packagist.org/packages/wptechnix/coding-standards"><img src="https://img.shields.io/packagist/v/wptechnix/coding-standards.svg?style=flat-square&label=release" alt="Download Package"></a>
    <a href="https://php.net"><img src="https://img.shields.io/packagist/php-v/wptechnix/coding-standards.svg?style=flat-square&colorB=%238892BF" alt="PHP Programming Language"></a>
    <a href="https://github.com/wptechnix/coding-standards/blob/master/LICENSE"><img src="https://img.shields.io/packagist/l/wptechnix/coding-standards.svg?style=flat-square&colorB=darkcyan" alt="Read License"></a>
</p>

## About

This is a coding standard for [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer).
It builds upon rules from [Slevomat Coding Standard](https://github.com/slevomat/coding-standard)
and [PHPCSExtra](https://github.com/PHPCSStandards/PHPCSExtra), with a focus on:


**Type Safety:**
- `declare(strict_types=1)` required in all files
- Parameter, return, property, and class constant type hints required
- Union, intersection, and DNF types supported
- Disallows mixed type hint and array type hint syntax (use generics in PHPDoc)
- Strict comparison operators (`===`, `!==`) enforced

**Modern PHP 8.0+ Features:**
- Constructor property promotion required
- Arrow functions required for single-expression closures
- Null-safe operator and null coalesce operators required where applicable
- Non-capturing catch blocks (PHP 8.0+)
- Numeric literal separators for readability
- Trailing commas in multiline structures

**Immutability & Code Quality:**
- Readonly properties enforced, public mutable properties forbidden
- Disallows `empty()` function
- Early returns required
- Alphabetically sorted use statements and array keys
- Proper class member ordering and spacing
- PHPDoc requirements with proper formatting

## Installation

Install this package as a development dependency using [Composer](https://getcomposer.org).

```bash
composer require --dev wptechnix/coding-standards
```

### Automatic Registration (Optional)

For automatic registration of the standard with PHP_CodeSniffer, optionally install the
[Dealerdirect Composer Installer](https://github.com/Dealerdirect/phpcodesniffer-composer-installer):

```bash
composer require --dev dealerdirect/phpcodesniffer-composer-installer
```

Without Dealerdirect, you can still use the standard by manually referencing it in your `phpcs.xml` file.

## Usage

To use this coding standard, add `<rule ref="WPTechnix"/>` to your `phpcs.xml`
configuration.

Here are the contents of an example `phpcs.xml.dist` file that you may place in
the root of your repository:

```xml
<?xml version="1.0"?>
<ruleset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="vendor/squizlabs/php_codesniffer/phpcs.xsd">

    <arg name="extensions" value="php"/>
    <arg name="colors"/>
    <arg value="sp"/>

    <file>./src</file>
    <file>./tests</file>

    <rule ref="WPTechnix"/>

</ruleset>
```

Then, run PHP_CodeSniffer:

```bash
./vendor/bin/phpcs
```

To automatically fix violations:

```bash
./vendor/bin/phpcbf
```

## Project-Specific Coding Standards

This base standard can be extended for project-specific coding requirements. The following projects xtend WPTechnix coding standards:

- [WPTechnix WordPress Coding Standards](https://github.com/WPTechnix/wordpress-coding-standards) - Extends this standard with WordPress-specific rules and conventions

## Contributing

Contributions are welcome! To contribute, please familiarize yourself with
[CONTRIBUTING.md](CONTRIBUTING.md).

## Copyright and License

The wptechnix/coding-standards library is copyright © [WPTechnix](https://wptechnix.com)
and licensed for use under the terms of the
MIT License (MIT). Please see [LICENSE](LICENSE) for more information.
