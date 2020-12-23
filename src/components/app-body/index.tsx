import React, { useState, useEffect } from 'react';
import styles from './index.less';

interface textDemoProps { }

const HSAppBody = (props: textDemoProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
  }, [])

  return <div className={styles.box}>HSAppBody{loading}</div>;
};

export default HSAppBody;

