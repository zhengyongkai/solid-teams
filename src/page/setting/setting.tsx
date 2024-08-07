import TitlePanel from '@/components/Common/TitlePanel/TitlePanel'
import RadioGroup, { Radio } from '@/components/Form/RadioGroup/RadioGroup'
import useLang from '@/hook/useLang'
import useStore from '@/hook/useStore'
import { Locale, localeDict } from '@/locale'

export default function SettingPage() {
  const { setLang } = useLang()
  const { lang } = useStore()
  return (
    <>
      <div>
        <TitlePanel>
          <div class="text-14">常规</div>
          <div></div>
        </TitlePanel>
        <div class="p-16">
          <h3 class="text-16 font-700 my-16 mb-24">语言设置</h3>
          <div>
            <RadioGroup
              defaultValue={lang()}
              name="radio"
              className=" radio-sm"
              size={'large'}
              onChange={(e) => {
                setLang(e as Locale)
              }}
            >
              {Object.entries(localeDict).map((item) => {
                return <Radio value={item[0]} label={item[1]}></Radio>
              })}
            </RadioGroup>
          </div>
        </div>
      </div>
    </>
  )
}
