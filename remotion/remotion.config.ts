import {Config} from '@remotion/cli/config';

Config.Rendering.setImageFormat('jpeg');
Config.Output.setOverwriteOutput(true);
Config.Output.setCodec('h264');
Config.Browser.setConcurrency(2);
