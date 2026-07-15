import dayjs from "dayjs";

export const formatDate = (date) => {
    if (!date) return "";

    return dayjs(date).format("DD/MM/YYYY");
};

export const formatDateTime = (date) => {
    if (!date) return "";

    return dayjs(date).format("DD/MM/YYYY HH:mm");
};

export const formatCurrency = (amount) => {
    if (amount == null) return "$0.00";

    return `$${Number(amount).toFixed(2)}`;
};