var underscore = function(under) {
    this.charac = under;
    this.appear = false;
    this.letterRender = function() {
        return !(this.appear) ? "_": this.charac;
    };
};

module.exports = underscore;