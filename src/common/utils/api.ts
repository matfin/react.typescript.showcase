import { IStory } from 'common/interfaces';
import stories from 'content/stories.json';

export const getStories = (): Promise<IStory[]> => new Promise((resolve) => setTimeout(() => {
  resolve(stories);
}, 1000));

export const getStory = (id: string): Promise<IStory> => new Promise((resolve, reject) => {
  const story: IStory = stories.find((item: IStory) => item.id === id);

  if (story) {
    setTimeout((): void => {
      resolve(story);
    }, 1000);
  } else {
    reject({ notfound: true });
  }
});
