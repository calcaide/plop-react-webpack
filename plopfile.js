module.exports = function(plop){
    plop.setGenerator('React webpack generator', {
        description: 'Plop generator for a React webpack UI',
        prompts: [
            {
                type: 'input',
                name: 'project-name',
                message: 'Project name?',
                validate: function (value) {
                    if ((/.+/).test(value)) { return true; }
                    return 'Project name is required';
                }
            },
            {
                type: 'input',
                name: 'project-description',
                message: 'Project description?'
            },
            {
                type: 'input',
                name: 'project-author',
                message: 'Project author?'
            }
        ],
        actions: function(data){
            var actions = [];

            // Copy package.json changing project name, description and author.
            actions.push({
                type: 'add',
                path: 'package.json',
                templateFile: 'node_modules/plop-react-webpack/templates/package.json'
            });

            // Copy .editorconfig file
            actions.push({
                type: 'add',
                path: '.editorconfig',
                templateFile: 'node_modules/plop-react-webpack/templates/.editorconfig'
            });

            // Copy .gitignore
            actions.push({
                type: 'add',
                path: '.gitignore',
                templateFile: 'node_modules/plop-react-webpack/templates/.gitignore'
            });

            // Copy .babelrc
            actions.push({
                type: 'add',
                path: '.babelrc',
                templateFile: 'node_modules/plop-react-webpack/templates/.babelrc'
            });

            // Copy to /app app.js and index.html
            actions.push(
                {
                    type: 'add',
                    path: 'app/app.js',
                    templateFile: 'node_modules/plop-react-webpack/templates/app/app.js'
                },
                {
                    type: 'add',
                    path: 'app/index.html',
                    templateFile: 'node_modules/plop-react-webpack/templates/app/index.html'
                }
            );

            return actions;
        }
    })
};