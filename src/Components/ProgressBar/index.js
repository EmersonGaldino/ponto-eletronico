import React from 'react';
import {Progress} from 'semantic-ui-react'

const index = ({width}) => <Progress percent={Math.round(width)} indicating progress/>

export default index