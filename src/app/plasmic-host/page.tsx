import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import '../../utils/plasmic/plasmic-init-client';

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}