import { Tree } from '@nrwl/devkit';
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';

import { UpdateScopeSchemaGeneratorSchema } from './schema';

describe('update-scope-schema generator', () => {
  let appTree: Tree;
  const options: UpdateScopeSchemaGeneratorSchema = {
    name: 'test',
    directory: 'api'
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  // it('should run successfully', async () => {
  //   await generator(appTree, options);
  //   const config = readProjectConfiguration(appTree, 'test');
  //   expect(config).toBeDefined();
  // });
});
