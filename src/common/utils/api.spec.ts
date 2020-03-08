import { getStories, getStory } from './api';

jest.mock('content/stories.json', () => [
  { id: 'test-1', title: 'First test', content: 'This is the first test story.' },
  { id: 'test-2', title: 'Second test', content: 'This is the second test story.' }
]);

describe('api tests', () => {
  it('gets stories', async () => {
    await expect(getStories()).resolves;
  });

  describe('getting a story', () => {
    it('gets a story with success and resolves', async () => {
      await expect(getStory('test-2')).resolves.toEqual(
        { id: 'test-2', title: 'Second test', content: 'This is the second test story.' }
      );
    });

    it('fails to get a story and rejects', async () => {
      await expect(getStory('test-notfound')).rejects.toEqual({ notfound: true });
    });
  });
});
