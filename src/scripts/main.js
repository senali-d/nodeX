const openDialog = ({ html = '', topic = '' }) => {
    document.getElementById('modalTitle').innerHTML = `module - ${topic}`.toUpperCase();
    document.getElementById('modalContent').innerHTML = html;
    const options = {};
    const modal = new bootstrap.Modal(document.getElementById('staticBackdropModal'), options);
    modal.show();
}

window.onload = () => {
    const groups = document.querySelectorAll('.module-row');
    const topicCards = document.querySelectorAll('.topic-card');

    groups.forEach(group => {
        group.addEventListener('click', (el) => {
            const { currentTarget } = el;
            const [collapseButton] = currentTarget.getElementsByClassName('btn btn-link');
            collapseButton.click();
        });
    });

    topicCards.forEach(topic => {
        topic.addEventListener('click', (el) => {
            const { currentTarget: { id: currentId } = {} } = el;
            const { html, topic } = data.find(({ id }) => id === currentId);
            openDialog({ html, topic });
        });
    });
};
