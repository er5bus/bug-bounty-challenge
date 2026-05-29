import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import { defaultLanguages } from "../../i18n/i18n";


const LanguageSwitcher: React.FC = () => {
    const { i18n, t } = useTranslation("app");

    return (
        <FormControl size="small">
            <Select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                sx={{
                    color: "white",
                    height: "28px",
                    ".MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.4)" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                    ".MuiSvgIcon-root": { color: "white" }
                }}
            >
                {defaultLanguages.map((lang) => (
                    <MenuItem key={lang} value={lang}>
                        {t(`language.${lang}`)}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default LanguageSwitcher;