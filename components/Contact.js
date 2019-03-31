var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('div', {className: 'contactItem'},
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                }),
                React.createElement('div', {className: 'contactInfo'}, 
                    React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
                    React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
                    React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, this.props.item.email)
                )  
            )
        )
    }
})