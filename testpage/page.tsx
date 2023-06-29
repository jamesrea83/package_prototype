import { NextPage } from 'next';

import styles from './page.module.scss';

const TestPage: NextPage = () => {
	return (
		<div className={styles.page}>
			This is a test page exported as an NPM package
		</div>
	);
};

export default TestPage;
