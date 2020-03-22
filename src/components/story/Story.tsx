import React, { useEffect } from 'react';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { useParams } from 'react-router-dom';
import { IStory, IStoryState } from 'common/interfaces';
import StorySt, { TitleSt, ContentSt } from './Story.css';

export interface IProps {
  error: any,
  pending: boolean,
  story: IStory,
  fetchStory: ThunkAction<void, IStoryState, unknown, Action<string>>,
  resetStory: Action,
}

const Story = ({
  error, pending, story, fetchStory, resetStory,
}: IProps) => {
  const { id } = useParams();
  const loading = <TitleSt>Loading...</TitleSt>;
  const errorMessage = <TitleSt>Error</TitleSt>;
  const content = (
    <>
      <TitleSt>
        {story?.title}
      </TitleSt>
      <ContentSt>
        {story?.content}
      </ContentSt>
    </>
  );

  useEffect(() => {
    fetchStory(id);

    return resetStory;
  }, [id]);

  return (
    <StorySt>
      { pending && loading }
      { error && errorMessage }
      { !pending && !error && content }
    </StorySt>
  );
};

export default Story;
