const Error = () => {
    const errorStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '72vh',
        backgroundColor: '#f7f7f7',
    };

    const h1Styles = {
        fontSize: '50px',
        color: '#e74c3c',
    };

    return (
        <div style={errorStyles}>
            <h1 style={h1Styles}>Error Not Found!</h1>
        </div>
    );
};

export default Error;
