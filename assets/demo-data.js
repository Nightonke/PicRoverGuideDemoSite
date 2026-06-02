(function () {
  const imageExtension = 'jpg';

  function pad(value) {
    return String(value).padStart(3, '0');
  }

  function localImage(index, titlePrefix) {
    const number = pad(index);
    return {
      title: number,
      creator: 'Spring Lens Archive',
      file: `guide-${number}.${imageExtension}`
    };
  }

  function makeGroup(start, count, titlePrefix) {
    return Array.from({ length: count }, (_, offset) => localImage(start + offset, titlePrefix));
  }

  const allImages = makeGroup(1, 100, 'Spring Frame');

  const images = {
    all: allImages,
    flowers: allImages.slice(0, 24),
    portraits: allImages.slice(24, 50),
    landscape: allImages.slice(50, 75),
    landscapes: allImages.slice(50, 75),
    objects: allImages.slice(75, 87),
    batchEdges: allImages.slice(87, 100)
  };

  function range(start, count) {
    return allImages.slice(start - 1, start - 1 + count);
  }

  window.PRGuideDemo = {
    images,
    galleries: {
      basic1: range(1, 12),
      basic2: range(13, 12),
      basic3: range(25, 12),
      workspace: range(37, 8),
      workspaceA: range(45, 12),
      workspaceB: range(57, 12),
      similarPreview: range(69, 8),
      story01: range(1, 8),
      story02: range(9, 8),
      story03: range(17, 8),
      story04: range(25, 8),
      story05: range(33, 8),
      story06: range(41, 8),
      playback: range(49, 28),
      batch: range(77, 11),
      batchEdges: range(88, 13)
    }
  };
})();
