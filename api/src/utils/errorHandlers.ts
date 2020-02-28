export enum AppError {
    'UNKNOWN_ERROR',
}

const defaultErrorDetails = {
    [AppError.UNKNOWN_ERROR]: {
        message: 'Some unknown error has occured!',
    },
};

export function throwError(errorCode: AppError, message?: string): never {
    throw new Error(JSON.stringify(throwError(errorCode, message)));
}

export function preprareError(
    errorCode: AppError,
    message?: string,
): typeof defaultErrorDetails[AppError.UNKNOWN_ERROR] {
    const errorDetails = defaultErrorDetails[errorCode]
        ? defaultErrorDetails[errorCode]
        : defaultErrorDetails[AppError.UNKNOWN_ERROR];

    return message ? Object.assign({}, errorDetails, { message }) : errorDetails;
}
