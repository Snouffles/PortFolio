var addTask = document.querySelector("[data-open-modal");
var closeModal = document.querySelector("[data-close-modal");
var modal = document.querySelector("[data-modal]");
addTask === null || addTask === void 0 ? void 0 : addTask.addEventListener("click", function () {
    modal.showModal();
});
closeModal === null || closeModal === void 0 ? void 0 : closeModal.addEventListener("click", function () {
    modal.close();
});
