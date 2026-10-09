import { BrainCircuit, BriefcaseBusiness, Database, Factory, MonitorUp, PanelTop, Router, ShieldCheck } from 'lucide-react';
import type { ScenarioId } from '@/lib/scenarios';

export const scenarioIcons = {
  industrialAutomation: Factory,
  edgeAi: BrainCircuit,
  networkSecurity: ShieldCheck,
  digitalSignage: MonitorUp,
  businessEducation: BriefcaseBusiness,
  iotGateway: Router,
  panelPc: PanelTop,
  nasStorage: Database,
} satisfies Record<ScenarioId, typeof Factory>;
