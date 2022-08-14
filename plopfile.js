module.exports = plop => {
    plop.setGenerator('Create a new component', {
        description: 'Create a new Organism, Molecule, or Atom component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Please enter component name:'
            }
            // {
            //     type: 'list',
            //     name: 'type',
            //     message: 'Please choose component type:',
            //     choices: ['Atoms', 'Molecules', 'Organisms']
            // }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'plop-templates/component.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: 'plop-templates/test.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'plop-templates/stories.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/types/{{pascalCase name}}.ts',
                templateFile: 'plop-templates/model.tsx.hbs'
            }
        ]
    });
};
