import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

export const mountWithRouter = (children: any): any => mount(<Router>{children}</Router>);

export default mountWithRouter;
