# Examples

Explore the directory [frameworks](./frameworks) for implementations of the [specs][specs]
in different tecnological stacks.

## Usage

Each framework subdirectory may have a README.md document of its own with some basic instructions.
But you can quickly try the examples either online with Replit or locally with Distrobox as well.

### Online with Replit

- visit the [examples sandbox on Replit][replitplayground]
- click the "Fork" button
- open the .replit file and uncomment the "run" line of your choice
- click "Run"

### Locally with Distrobox

[Distrobox][distrobox] is a simple to use tool for creating containerized environments.

The [devshells](./devshells) directory is the place to find the recipies for initializing disposable
boxes.

Below is an example of using the [nodejs](./devshells/nodejs) container to
launch the [Next.js example](./frameworks/nextjs) devshell:

```bash
cd devshells/nodejs
distrobox assemble create
distrobox enter nodejs
# inside the container
cd ../../frameworks/nextjs
npm install && npm run dev
# Ctrl+C to exit next server
# Ctrl+D to exit the container
```

And later, to discard the devshell:

```bash
cd devshells/nodejs
distrobox assemble rm
```

[specs]: https://github.com/Open-Cloud-Console/specs
[replitplayground]: https://replit.com/@fczuardi/Open-Cloud-Console-examples#.replit
[distrobox]: https://distrobox.it/
