import css from '../../styles/scss/Container.scss';

const Container = ({ children }) => (
    <div className={css.container}>
        { children }
    </div>
)

export default Container