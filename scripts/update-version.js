#!/usr/bin/env node

/**
 * Updates the version in composer.json
 * Used by semantic-release during the release process
 */

const fs = require('fs');
const path = require('path');

// Get version from command line argument
const version = process.argv[2];

if (!version) {
    console.error('Error: Version argument is required');
    console.error('Usage: node update-version.js <version>');
    process.exit(1);
}

// Validate version format (semver)
const semverRegex = /^\d+\.\d+\.\d+(-[a-zA-Z0-9.]+)?$/;
if (!semverRegex.test(version)) {
    console.error(`Error: Invalid version format: ${version}`);
    console.error('Expected format: X.Y.Z or X.Y.Z-prerelease');
    process.exit(1);
}

// Path to composer.json
const composerPath = path.join(__dirname, '..', 'composer.json');

try {
    // Read composer.json
    const composerContent = fs.readFileSync(composerPath, 'utf8');
    const composer = JSON.parse(composerContent);

    // Update version
    composer.version = version;

    // Write back to file with proper formatting
    fs.writeFileSync(
        composerPath,
        JSON.stringify(composer, null, 4) + '\n',
        'utf8'
    );

    console.log(`✓ Updated composer.json version to ${version}`);
} catch (error) {
    console.error(`Error updating composer.json: ${error.message}`);
    process.exit(1);
}
