const MIME_TYPES = {
  png: {
    type: "image/png",
    icon: "file-image-o",
  },
  jpg: {
    type: "image/jpg",
    icon: "file-image-o",
  },
  jpeg: {
    type: "image/jpeg",
    icon: "file-image-o",
  },
  webp: {
    type: "image/webp",
    icon: "file-image-o",
  },
  pdf: {
    type: "application/pdf",
    icon: "file-pdf-o",
  },
  doc: {
    type: "application/msword",
    icon: "file-word-o",
  },
  docx: {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    icon: "file-word-o",
  },
  xls: {
    type: "application/vnd.ms-excel",
    icon: "file-excel-o",
  },
  xlsx: {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    icon: "file-excel-o",
  },
  ppt: {
    type: "application/vnd.ms-powerpoint",
    icon: "file-powerpoint-o",
  },
  pptx: {
    type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    icon: "file-powerpoint-o",
  },
};

/**
 * Get MIME.
 * @param {array} [allowed_extension=[]] - Array of allowed extensions
 */
export function getMimesFor(allowed_extension = []) {
  let accepted_mime = [];
  allowed_extension.forEach((extension) => {
    if (MIME_TYPES[extension]) {
      accepted_mime.push(MIME_TYPES[extension].type);
    }
  });
  return accepted_mime.join(",");
}
