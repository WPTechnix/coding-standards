# Contributing to WPTechnix Coding Standards

Thank you for your interest in contributing to WPTechnix Coding Standards! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion for improvement:

1. Check if the issue already exists in the [GitHub Issues](https://github.com/wptechnix/coding-standards/issues)
2. If not, create a new issue with a clear title and description
3. Include relevant details such as:
   - PHP version (must be 8.0+)
   - PHP_CodeSniffer version
   - Example code that demonstrates the issue
   - Expected vs actual behavior

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. Make your changes
4. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add new rule for..."
   ```
5. Push to your fork:
   ```bash
   git push origin feat/your-feature-name
   ```
6. Open a Pull Request against the `main` branch

## Commit Message Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automated versioning and changelog generation.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature (triggers minor version bump)
- `fix`: A bug fix (triggers patch version bump)
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Changes to build system or dependencies
- `ci`: Changes to CI configuration
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverting a previous commit

### Breaking Changes

To indicate a breaking change (triggers major version bump), add `BREAKING CHANGE:` in the commit footer:

```
feat: change default line length

BREAKING CHANGE: The default line length has been changed from 120 to 100 characters.
```

Or use `!` after the type:

```
feat!: change default line length
```

### Examples

```bash
# Feature addition
git commit -m "feat: add rule for enforcing final classes"

# Bug fix
git commit -m "fix: correct regex pattern in naming convention rule"

# Documentation
git commit -m "docs: update installation instructions in README"

# Breaking change
git commit -m "feat!: require PHP 8.0 as minimum version"
```

## Development Setup

### Prerequisites

- PHP 8.0 or higher
- Composer 2.x
- Node.js 18.0 or higher
- npm 9.0 or higher

### Setup Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/wptechnix/coding-standards.git
   cd coding-standards
   ```

2. Install Composer dependencies:
   ```bash
   composer install
   ```

3. Install Node.js dependencies (for commitlint and git hooks):
   ```bash
   npm install
   ```

   This will automatically:
   - Install commitlint for commit message validation
   - Set up Husky git hooks
   - Configure the commit-msg hook to validate commits locally

### Git Hooks

This project uses [Husky](https://typicode.github.io/husky/) to enforce commit message standards locally:

- **commit-msg hook**: Automatically validates your commit messages against conventional commit format
- All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification
- Invalid commits will be rejected before they reach the repository

If your commit is rejected, check that it follows this format:
```
type(optional-scope): description

[optional body]

[optional footer]
```

## Testing Your Changes

Before submitting a pull request, test your ruleset changes:

1. Create a test PHP file with code samples
2. Run PHP_CodeSniffer with your modified ruleset:
   ```bash
   vendor/bin/phpcs --standard=WPTechnix path/to/test/file.php
   ```
3. Verify the output matches your expectations

## Modifying Rules

When adding or modifying rules in `WPTechnix/ruleset.xml`:

1. Document why the rule is being added or changed
2. Ensure the rule doesn't conflict with existing rules
3. Test with real-world code examples
4. Update documentation if necessary

### Rule Configuration Example

```xml
<!-- Add a new rule -->
<rule ref="SlevomatCodingStandard.TypeHints.PropertyTypeHint"/>

<!-- Customize a rule -->
<rule ref="Generic.Files.LineLength">
    <properties>
        <property name="lineLimit" value="120"/>
        <property name="absoluteLineLimit" value="150"/>
    </properties>
</rule>

<!-- Exclude a specific rule -->
<rule ref="PSR12">
    <exclude name="PSR12.Files.FileHeader"/>
</rule>
```

## Release Process

Releases are **fully automated** using [release-please](https://github.com/googleapis/release-please):

### How It Works

1. When commits are pushed to the `main` branch, release-please analyzes commit messages
2. A release PR is automatically created/updated with:
   - **Updated CHANGELOG.md** with all changes since last release, organized by commit type
   - **Release notes** with version number and all changes
   - Release PR title indicating the new version (e.g., "chore(main): release 1.0.0")
3. When the release PR is merged:
   - A new **Git tag** is created (e.g., `v1.0.0`)
   - A new **GitHub release** is published with release notes
   - **Packagist automatically detects** the new tag and publishes the release

### Version Bumping

Release-please follows [Semantic Versioning](https://semver.org/):

- `fix:` commits trigger a **PATCH** version bump (1.0.0 → 1.0.1)
- `feat:` commits trigger a **MINOR** version bump (1.0.0 → 1.1.0)
- `feat!:` or commits with `BREAKING CHANGE:` trigger a **MAJOR** version bump (1.0.0 → 2.0.0)

### Important Notes

- **CHANGELOG.md is auto-generated** - Do not manually edit it
- **Version comes from Git tags** - composer.json does not contain a version field (this is correct for Packagist packages)
- **Packagist uses Git tags** - When a tag is created, Packagist automatically publishes the new version
- Only merge the release PR when you're ready to publish a new version to Packagist

## Questions?

If you have questions about contributing, please open an issue or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
