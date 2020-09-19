import * as TROIS from './index.js';

export const TroisJSVuePlugin = {
  install: (app) => {
    const comps = [
      'Camera',
      'PerspectiveCamera',
      'Renderer',
      'Scene',

      'BoxGeometry',
      'SphereGeometry',

      'AmbientLight',
      'DirectionalLight',
      'PointLight',
      'SpotLight',

      'BasicMaterial',
      'LambertMaterial',
      'PhongMaterial',
      'PhysicalMaterial',
      'ShaderMaterial',
      'StandardMaterial',
      'SubSurfaceMaterial',

      'Box',
      'Image',
      'Plane',
      'Sphere',
      'Text',

      'InstancedMesh',
      'Sprite',

      // 'BloomPass',
      'BokehPass',
      'EffectComposer',
      'FilmPass',
      'RenderPass',
      'UnrealBloomPass',

      'GLTFViewer',
    ];

    comps.forEach(comp => {
      app.component(comp, TROIS[comp]);
    });
  },
};
