var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            <div className={'contactItem'}>
                <img className={'contactImage'} src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}/>
                <div className={'contactInfo'}>
                    <p className={'contactLabel'}>
                        Imię: {this.props.item.firstName}
                    </p>
                    <p className={'contactLabel'}>
                        Nazwisko: {this.props.item.lastName}
                    </p>
                    <a href={'mailto:' + this.props.item.email}>
                        {this.props.item.email}
                    </a>
                </div>
            </div>
        )
    }
});