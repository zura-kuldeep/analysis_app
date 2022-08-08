

const imageBlur = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    let dst = new cv.Mat();
    let ksize = new cv.Size(3, 3);
    let anchor = new cv.Point(-1, -1);
    cv.blur(src, dst, ksize, anchor, cv.BORDER_DEFAULT);
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
};
const gaussianBlur = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    let dst = new cv.Mat();
    let ksize = new cv.Size(3, 3);
    cv.GaussianBlur(src, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
};

const medianBlur = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    let dst = new cv.Mat();
    // You can try more different parameters
    cv.medianBlur(src, dst, 5);
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
};

const bilateralFilter = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    let dst = new cv.Mat();
    cv.cvtColor(src, src, cv.COLOR_RGBA2RGB, 0);
    // You can try more different parameters
    cv.bilateralFilter(src, dst, 9, 75, 75, cv.BORDER_DEFAULT);
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
};

const structuringElement = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
    let dst = new cv.Mat();
    let M = new cv.Mat();
    let ksize = new cv.Size(5, 5);
    // You can try more different parameters
    M = cv.getStructuringElement(cv.MORPH_CROSS, ksize);
    cv.morphologyEx(src, dst, cv.MORPH_GRADIENT, M);
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
    M.delete();
};

const erosion = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    let dst = new cv.Mat();
    let M = cv.Mat.ones(5, 5, cv.CV_8U);
    let anchor = new cv.Point(-1, -1);
    // You can try more different parameters
    cv.erode(
        src,
        dst,
        M,
        anchor,
        1,
        cv.BORDER_CONSTANT,
        cv.morphologyDefaultBorderValue()
    );
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
    M.delete();
};

const dilation = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    let dst = new cv.Mat();
    let M = cv.Mat.ones(5, 5, cv.CV_8U);
    let anchor = new cv.Point(-1, -1);
    // You can try more different parameters
    cv.dilate(
        src,
        dst,
        M,
        anchor,
        1,
        cv.BORDER_CONSTANT,
        cv.morphologyDefaultBorderValue()
    );
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
    M.delete();
};

const opening = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    let dst = new cv.Mat();
    let M = cv.Mat.ones(5, 5, cv.CV_8U);
    let anchor = new cv.Point(-1, -1);
    // You can try more different parameters
    cv.morphologyEx(
        src,
        dst,
        cv.MORPH_OPEN,
        M,
        anchor,
        1,
        cv.BORDER_CONSTANT,
        cv.morphologyDefaultBorderValue()
    );
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
    M.delete();
};

const closing = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    let dst = new cv.Mat();
    let M = cv.Mat.ones(5, 5, cv.CV_8U);
    // You can try more different parameters
    cv.morphologyEx(src, dst, cv.MORPH_CLOSE, M);
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
    M.delete();
};

const morphologicalGradient = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
    let dst = new cv.Mat();
    let M = cv.Mat.ones(5, 5, cv.CV_8U);
    // You can try more different parameters
    cv.morphologyEx(src, dst, cv.MORPH_GRADIENT, M);
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
    M.delete();
};

const cannyEdgeDetect = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    let dst = new cv.Mat();
    cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
    // You can try more different parameters
    cv.Canny(src, dst, 50, 100, 3, false);
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
};

const pyrDown = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    let dst = new cv.Mat();
    // You can try more different parameters
    cv.pyrDown(src, dst, new cv.Size(0, 0), cv.BORDER_DEFAULT);
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
};
const pyrUp = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    let dst = new cv.Mat();
    // You can try more different parameters
    cv.pyrUp(src, dst, new cv.Size(0, 0), cv.BORDER_DEFAULT);
    cv.imshow("outputsrc", dst);
    src.delete();
    dst.delete();
};

const matching = () => {
    let cv = window.cv;
    let src = cv.imread("imagesrc");
    let templ = cv.imread("miniImg"); // image source of other image
    let dst = new cv.Mat();
    let mask = new cv.Mat();
    cv.matchTemplate(src, templ, dst, cv.TM_CCOEFF, mask);
    let result = cv.minMaxLoc(dst, mask);
    let maxPoint = result.maxLoc;
    let color = new cv.Scalar(255, 0, 0, 255);
    let point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
    cv.rectangle(src, maxPoint, point, color, 2, cv.LINE_8, 0);
    cv.imshow("outputsrc", src);
    src.delete();
    dst.delete();
    mask.delete();
};

