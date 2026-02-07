# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## Python / Virtualenv

- Virtual environment for workspace Python scripts:
  - Created with: `python3 -m venv /home/moltbot/.venv`
  - Activate interactivo: `source /home/moltbot/.venv/bin/activate`
  - **Desde scripts / comandos de este asistente:** usar SIEMPRE el binario del venv directamente:
    - `cd /home/moltbot/.openclaw/workspace && /home/moltbot/.venv/bin/python ...`

- Dependencias Python del workspace:
  - Definidas en `requirements.txt` en `/home/moltbot/.openclaw/workspace/`.
  - Instalar (ya desde el venv): `pip install -r requirements.txt`.

Use este venv al instalar dependencias (`pypdf`, `pandas`, etc.) y al correr scripts en `scripts/`.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.
