export default ({ Meteor, User }) => {
    User.methods({
        setStatusIdle() {
            Meteor.callAsync('updateSessionStatus', 1);
        },
        setStatusOnline() {
            Meteor.callAsync('updateSessionStatus', 2);
        },
    });
};
